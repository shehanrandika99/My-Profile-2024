import React from 'react'

function EducationComponent() {
  return (
    <div>
      <div>
        <p class="text-6xl font-semibold text-gray-900 text-center mb-10 mt-20">Education</p>
      </div>
      <div>
        <div className='mx-60'>
          <ol class=" overflow-hidden space-y-8">
            <li
              class="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-black after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
              <a href="https://pagedone.io/" class="flex items-start font-medium w-full  ">
                <span
                  class="w-8 h-8 aspect-square bg-black border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  2
                </span>
                <div class="block">
                  <h4 class=" text-black mb-2 font-bold text-xl">BSC (HONS) IN SOFTWARE ENGINEERING</h4>
                  <p class="text-md text-gray-600 max-w-xs mb-4">University of Plymouth - United kingdom.</p>
                  <p class="text-md text-gray-600 max-w-xs"><p className='font-bold text-black'>Final Year Project -</p> Color adjustment tool for color-blind people</p>
                  <p class="text-md text-gray-600 max-w-xs"><p className='font-bold text-black'>Teach area - </p>Computer Vision | FullStack Development | Mobile App | Web extension Development</p>
                  <div class="flex items-center gap-4 my-6">
                    <button type="button"
                      class="py-2.5 px-6 text-sm bg-black text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">Download Transcript</button>
                  </div>
                </div>
              </a>
            </li>
            <li
              class="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
              <a class="flex items-center font-medium w-full  ">
                <span
                  class="w-8 h-8 bg-gray-50 relative z-20 border-2 border-black rounded-full flex justify-center items-center mr-3 text-sm text-black lg:w-10 lg:h-10">1</span>
                <div class="block">
                  <h4 class=" text-black mb-2 text-xl font-bold">GCE Advanced level in Sri lanka</h4>
                  <p class="text-md text-gray-600 max-w-xs">
                    Physical Science
                  </p>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>

  )
}

export default EducationComponent