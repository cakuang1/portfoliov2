import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;
import com.amazonaws.services.simpleemail.model.SendEmailRequest;
import com.amazonaws.services.simpleemail.model.Message;
import com.amazonaws.services.simpleemail.model.Content;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ContactFormLambda implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    private static final String EMAIL_SUBJECT = "Contact Form Submission";

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        try {

            ObjectMapper objectMapper = new ObjectMapper();
            ContactFormData formData = objectMapper.readValue(request.getBody(), ContactFormData.class);
            sendEmail(formData);
            return new APIGatewayProxyResponseEvent().withStatusCode(200).withBody("Form submitted successfully.");
        } catch (Exception e) {

            context.getLogger().log("Error: " + e.getMessage());
            return new APIGatewayProxyResponseEvent().withStatusCode(500).withBody("Internal Server Error");
        }
    }

    private void sendEmail(ContactFormData formData) {

        AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.defaultClient();

        SendEmailRequest emailRequest = new SendEmailRequest()
                .withDestination(new com.amazonaws.services.simpleemail.model.Destination().withToAddresses("recipient@example.com"))
                .withMessage(new Message()
                        .withBody(new com.amazonaws.services.simpleemail.model.Body()
                                .withText(new Content().withCharset("UTF-8").withData(formData.toString())))
                        .withSubject(new Content().withCharset("UTF-8").withData(EMAIL_SUBJECT)))
                .withSource("sender@example.com");

        // Send the email
        client.sendEmail(emailRequest);
    }

    static class ContactFormData {
        private String name;
        private String email;
        private String message;
    
        // Getters
        public String getName() {
            return name;
        }
    
        public String getEmail() {
            return email;
        }
    
        public String getMessage() {
            return message;
        }
    
        // Setters
        public void setName(String name) {
            this.name = name;
        }
    
        public void setEmail(String email) {
            this.email = email;
        }
    
        public void setMessage(String message) {
            this.message = message;
        }
    
        @Override
        public String toString() {
            return "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
        }
    }
    
}
