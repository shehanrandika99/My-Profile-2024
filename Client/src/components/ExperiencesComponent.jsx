import React from 'react'

function ExperiencesComponent() {
  return (
    <div>
      <div>
        <p class="text-6xl font-semibold text-gray-900 text-center mb-10 mt-20">   Experience</p>
      </div>
      <div>
        <div>
          <div className="mx-auto max-w-5xl">
            <ol className="overflow-hidden space-y-8">
              <li className="relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-black after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                <a href="https://pagedone.io/" className="flex items-start font-medium w-full">
                  <span className="w-8 h-8 aspect-square bg-black border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                    1
                  </span>
                  <div className="block  ">
                    <h4 className="text-black mb-2 font-bold text-xl">Research-Development-Software-Engineer (Intern)</h4>
                    <p className="text-md text-gray-600 max-w-xs mb-4">EXE lk |  (2022 -2023)</p>
                    <p className="text-md text-gray-600 max-w-xs">
                      <span className="font-bold text-black">Experience -</span> AI and Ml Projects , Mobile App development using Native Java,Fulstack Development with ASP.NET and MEAN and MERN
                    </p>
                    <p className="text-md text-gray-600 max-w-xs">
                      <span className="font-bold text-black">Technologies -</span> React, Python, Flask, JavaScript,Typescript, Node js, Native Java Mobile App,java
                    </p>
                    <div className="flex items-center gap-4 my-6">
                      <button type="button" className="py-2.5 px-6 text-sm bg-black text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">
                        Download Service Letter
                      </button>
                    </div>
                  </div>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperiencesComponent