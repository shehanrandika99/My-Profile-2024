import React from 'react'

function EducationComponent() {
  return (
    <div className="mx-auto px-4">
      <div>
        <p className="text-6xl font-semibold text-gray-900 text-center mb-10 mt-20">Education</p>
      </div>
      <div>
        <div className="mx-auto max-w-5xl">
          <ol className="overflow-hidden space-y-8">
            <li className="relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-black after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
              <a href="https://pagedone.io/" className="flex items-start font-medium w-full">
                <span className="w-8 h-8 aspect-square bg-black border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  2
                </span>
                <div className="block  ">
                  <h4 className="text-black mb-2 font-bold text-xl">BSC (HONS) IN SOFTWARE ENGINEERING</h4>
                  <p className="text-md text-gray-600 max-w-xs mb-4">University of Plymouth - United Kingdom.</p>
                  <p className="text-md text-gray-600 max-w-xs">
                    <span className="font-bold text-black">Final Year Project -</span> Color adjustment tool for color-blind people
                  </p>
                  <p className="text-md text-gray-600 max-w-xs">
                    <span className="font-bold text-black">Teach area -</span> Computer Vision | FullStack Development | Mobile App | Web extension Development
                  </p>
                  <div className="flex items-center gap-4 my-6">
                    <button type="button" className="py-2.5 px-6 text-sm bg-black text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">
                      Download Transcript
                    </button>
                  </div>
                </div>
              </a>
            </li>
            <li className="relative flex-1 after:content-[''] z-10 after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
              <a className="flex items-center font-medium w-full">
                <span className="w-8 h-8 bg-gray-50 relative z-20 border-2 border-black rounded-full flex justify-center items-center mr-3 text-sm text-black lg:w-10 lg:h-10">
                  1
                </span>
                <div className="block">
                  <h4 className="text-black mb-2 text-xl font-bold">GCE Advanced level in Sri Lanka</h4>
                  <p className="text-md text-gray-600 max-w-xs">
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
