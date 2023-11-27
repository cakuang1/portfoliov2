import Layout from "@/components/layout"
import Chapter from "@/components/blogcomponents/chapter"
import Subheader from "@/components/blogcomponents/subheader"
import Bullet from "@/components/blogcomponents/bulletpoints"




export default function EffectiveJava() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
          <div className="text-center mt-14">
                <h1 className="font-bold text-3xl inline-block border-b-2 border-purple  ">Grokking Algorithms</h1>
                <h2>Summarizing Grokking algorithms so I can pass these interviews</h2>
            </div>
            <div>
                <Chapter title="Chapter 1. Introduction"/>
                <Subheader title="Binary Search"/>
                <p>Analogy used in the book.Phone book. Searching for a name that starts with the letter k.</p>
                <p>Binary search is an algorithm that works on sorted collections in which every step, you are spliting the search space in half,leading to an O(log n (base 2)) run time.</p>
                <Subheader title="Exercises"/>
                <p>1.1  Suppose you have a sorted list of 128 names, and you’re searching
                through it using binary search. What’s the maximum number of
                steps it would take?</p>
                <p className="font-bold">log(128) = 7 searches</p>
                <p>1.2  Suppose you double the size of the list. What’s the maximum
                number of steps now?  </p>  
                <p className="font-bold">8. log(256) = 8</p>
                <Subheader title="Big O notation"/>
                <p> Big O notation shows you have fast an algorithm is. Not as time, but as the number of operations needed.</p>
                <p>Big O establishes the worst case runtime . Some common ones are : </p>
                <Bullet bullets={["O(Log n ) log time. Binary search", "O(n) linear time, Simple search", "O(nlogn) Fast sorting algortihm", "O(n^2) Selection sort, O(n!) traveling salesperson"]}/> 
                <Subheader title="Exercises"/>
                <p>1.3  Suppose you double the size of the list. What’s the maximum number of steps now?  </p> 
                <p className="font-bold">Assuming the phone book is sorted by names, then it would be O(logn). Simply do binary search</p>
                <p>1.4 You have a phone number, and you want to find the person’s name
                in the phone book. (Hint: You’ll have to search through the whole
                book!)  </p> 
                <p className="font-bold">O(n). Must search through the entire phone book</p>
                <p>1.5  You want to read the numbers of every person in the phone book.  </p>
                <p className="font-bold">O(n)</p> 
                <p>1.6  You want to read the numbers of just the As. (This is a tricky one!
                It involves concepts that are covered more in chapter 4. Read the
                answer—you may be surprised!)  </p>
                <p>O(n)</p>
                <Chapter title="selection sort"/>
                <Subheader title="How memory works"/>
                <p>Gives the drawer analogy.Each drawer can hold one item. In order to get access to memory, you need to allocate space</p>
                <Subheader title="Arrays and linked lists"/>
                <p>When should you use a linked list vs an array?</p>
                <p>Arrays aren't intrisically dynamic. If you were to exceed the amount of space allocated for an array, you would need to extend the array by moving to a new place in memory and extending the array in memory, then copy over the original array</p>
                <p>A work around for this is a LinkedList, where items are spread throughout memory and allocated dynamically when an item is added.</p>
                <p>So what are arrays good for? Well, linked list are horrid at indexing. Suppose you wanted to read some arbitrary item in a linked list. You can't just index into it because you don't know where the item is located. You would need to do a linear search across the entire linked list.</p>
                <Subheader title="Excercise"/>

                <p>2.1 Suppose you’re building an app to keep track of your finances.
                Every day, you write down everything you spent money on. At the
                end of the month, you review your expenses and sum up how much
                you spent. So, you have lots of inserts and a few reads. Should you
                use an array or a list? </p>
                <p className="font-bold">Linked Lists will work fine here.</p>
                <p>2.2 Suppose you’re building an app for restaurants to take customer
                orders. Your app needs to store a list of orders. Servers keep adding
                orders to this list, and chefs take orders off the list and make them.
                It’s an order queue: servers add orders to the back of the queue, and
                the chef takes the first order off the queue and cooks it.
                Would you use an array or a linked list to implement this queue?
                (Hint: Linked lists are good for inserts/deletes, and arrays are good
                for random access. Which one are you going to be doing here?) </p>
                <p>Linked lists. If we assume that we aren't randomly acessing elements of the list.Using a doubly linked list would work fine here.</p>
                <p className="font-bold">2.3 Let’s run a thought experiment. Suppose Facebook keeps a list of
                usernames. When someone tries to log in to Facebook, a search is
                done for their username. If their name is in the list of usernames,
                they can log in. People log in to Facebook pretty often, so there are
                a lot of searches through this list of usernames. Suppose Facebook
                uses binary search to search the list. Binary search needs random
                access—you need to be able to get to the middle of the list of
                usernames instantly. Knowing this, would you implement the list
                as an array or a linked list?</p>
                <p className="font-bold">Arrays. Random indexing is extremely important for binary search.</p>
                <p>2.4 People sign up for Facebook pretty often, too. Suppose you decided
              to use an array to store the list of users. What are the downsides
              of an array for inserts? In particular, suppose you’re using binary
              search to search for logins. What happens when you add new users
              to an array?</p>
              <p className="font-bold"> Insertions take O(n). Since we are using binary search. We would need to keep the array sorted. However, inserting in the middle of the array isn't ideal.</p>
              <p>2.5 In reality, Facebook uses neither an array nor a linked list to store
              user information. Let’s consider a hybrid data structure: an array
              of linked lists. You have an array with 26 slots. Each slot points to a
              linked list. For example, the first slot in the array points to a linked
              list containing all the usernames starting with a. The second slot
              points to a linked list containing all the usernames starting with b,
              and so on.</p>
              <p>I would say its faster. Insertions would take constant time. While reads would take the length of the linked list.</p>
              <Subheader title="Selection sort"/>
              <p>O(n^2) algorithm that searches the entire list n times to find the largest item and place it at the front of the list</p>
              <Chapter title="Recursion"/>
              <p>Analogy used : We are finding a key in a box. This box contains other boxes, which also may contain other boxes ..... etc. </p>
              <p>Here is one approach:</p>
              <Bullet bullets={["Make of pile of boxes to look through","Grab a box from the pile, and go through it", "If it contains a key you're done", "If it contains box(es), add them to the pile","Repeat"]}/>
              <p>Heres an alternative approach</p>
              <Bullet bullets={["1. Look through box", "If you find a box, go to step 1", "Find key? you are done"]}/>    
              <Subheader title="Base case and recursive case"/>
              <p>All recursive functions have two parts. The base case, and the recursive case. Recursive case is when the function calls itself  and the base case is when the recursion stops calling itself.</p>
              <Subheader title="The stack"/>
              <p> A natural data structure that encompasses the lifecycle of a recursion function is a stack. Say you call a recursive function that calls another function before it is returned. This new function is placed on the stack. Once this function has returned, the function can be removed from the call stack and the original function is also returned.</p>
              <p>Now imagine a recursive function, where a function calls itself (potentially multiple times). This stack grows until it hits a base case.</p>
              <Subheader title="Exercise"/>
              <p>3.2 Suppose you accidentally write a recursive function that runs
              forever. As you saw, your computer allocates memory on the
              stack for each function call. What happens to the stack when your
              recursive function runs forever?</p>         
              <p className="font-bold">The stack will infinetly grow, until you run out of memory</p>   
                

                </div>
            </div>
   </Layout>
  )
}
