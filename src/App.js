import { MdOutlineFileDownloadDone } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

function App() {


  return (
    <div className="h-[100vw] bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h2 className="text-3xl text-center text-gray-300 font-bold py-4">My To-Do List</h2>

      <form className='flex justify-center items-center flex-col gap-4 mt-8 w-[100%] md:w-[80%] lg:w-[50%] mx-auto'>
        <input type="text" placeholder="Title" class="input input-bordered input-secondary w-full" />
        <textarea class="textarea textarea-secondary w-full" placeholder="Description"></textarea>
        <input type="submit" value='Add' class="btn btn-outline btn-success font-bold text-lg" />
      </form>

      <section className='my-16'>
        <h2 className="text-3xl text-center text-gray-300 font-bold py-4">Your To-Do List</h2>
        <div class="overflow-x-auto w-[90%] mx-auto mt-10">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Speciasjflkjsldfjlksdjflsdjlkfjlskdfjsjflsdjflsdjlfjsdlkfsdjklfsdksdjfklsjfklsfjksfjslist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
