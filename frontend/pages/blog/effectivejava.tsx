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
                <p>So what are arrays good for?</p>


                


                </div>
            </div>
   </Layout>
  )
}
