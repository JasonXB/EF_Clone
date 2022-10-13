import React from 'react';

export default function palette() {
  // These colors are hardcoded and need to be updated manually if the UI team makes changes

  return (
    <section className="p-4">
      {/* <h5 className='mb-4'>Theme colors set in tailwind.config.js</h5> */}
      <div className="flex flex-row gap-8 flex-wrap mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#026ABC]"> </div>
          <p>primary-1</p>
          <p>#026ABC</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#007AD9]"> </div>
          <p>primary-2</p>
          <p>#007AD9</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#1583D8]"> </div>
          <p>primary-3</p>
          <p>#1583D8</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#4BA5ED]"> </div>
          <p>primary-4</p>
          <p>#4BA5ED</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#AEDBFF]"> </div>
          <p>primary-5</p>
          <p>#AEDBFF</p>
        </div>
      </div>

      <div className="flex flex-row gap-8 flex-wrap mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#CE1982]"> </div>
          <p>secondary-1</p>
          <p>#CE1982</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#DE325D]"> </div>
          <p>secondary-2</p>
          <p>#DE325D</p>
        </div>
      </div>

      <div className="flex flex-row gap-8 flex-wrap mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#E43348]"> </div>
          <p>tertiary-1</p>
          <p>#E43348</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#ED493D]"> </div>
          <p>tertiary-2</p>
          <p>#ED493D</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#FF5E60]"> </div>
          <p>tertiary-3</p>
          <p>#FF5E60</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#FF725E]"> </div>
          <p>tertiary-4</p>
          <p>#FF725E</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#FC98A4]"> </div>
          <p>tertiary-5</p>
          <p>#FC98A4</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#FFBCC4]"> </div>
          <p>tertiary-6</p>
          <p>#FFBCC4</p>
        </div>
      </div>

      <div className="flex flex-row gap-8 flex-wrap mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#F8BC0F]"> </div>
          <p>fourth-1</p>
          <p>#F8BC0F</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#EBC967]"> </div>
          <p>fourth-2</p>
          <p>#EBC967</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#FAE4A2]"> </div>
          <p>fourth-3</p>
          <p>#FAE4A2</p>
        </div>
      </div>

      <div className="flex flex-row gap-8 flex-wrap mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#5B1790]"> </div>
          <p>royal-1</p>
          <p>#5B1790</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#6A63F6]"> </div>
          <p>royal-2</p>
          <p>#6A63F6</p>
        </div>
      </div>

      <div className="flex flex-row gap-8 flex-wrap mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#52555D]"> </div>
          <p>smoke-1</p>
          <p>#52555D</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#858993]"> </div>
          <p>smoke-2</p>
          <p>#858993</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#B9C0D3]"> </div>
          <p>smoke-3</p>
          <p>#B9C0D3</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#CED7F0]"> </div>
          <p>smoke-4</p>
          <p>#CED7F0</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#EEF2FF]"> </div>
          <p>smoke-5</p>
          <p>#EEF2FF</p>
        </div>
      </div>

      <div className="flex flex-row gap-8 flex-wrap mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#F6F6F6]"> </div>
          <p>light</p>
          <p>#F6F6F6</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-[#0C0C0C]"> </div>
          <p>dark</p>
          <p>#0C0C0C</p>
        </div>
      </div>
    </section>
  );
}
