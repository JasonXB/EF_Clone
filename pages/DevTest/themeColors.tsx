import React from 'react';

export default function palette() {
  // These colors are hardcoded and need to be updated manually if the UI team makes changes

  return (
    <section className="p-4">
      {/* <h5 className='mb-4'>Theme colors set in tailwind.config.js</h5> */}
      <div className="flex flex-row flex-wrap gap-8 mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-primary-1"> </div>
          <p>primary-1</p>
          <p>#026ABC</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-primary-2"> </div>
          <p>primary-2</p>
          <p>#CE1982</p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-8 mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-secondary-1"> </div>
          <p>secondary-1</p>
          <p>#C3E5FF</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-secondary-2"> </div>
          <p>secondary-2</p>
          <p>#OB066E</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-secondary-3"> </div>
          <p>secondary-3</p>
          <p>#4BA5ED</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-secondary-4"> </div>
          <p>secondary-4</p>
          <p>#860957</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-secondary-5"> </div>
          <p>secondary-5</p>
          <p>#DB57A3</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-secondary-6"> </div>
          <p>secondary-6</p>
          <p>#F0BADC</p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-8 mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-gradient-to-r from-gradient-var-1 to-gradient-var-2">
            {' '}
          </div>
          <p>var-1 to var-2</p>
          <p>#CB1488-#EF4C3A</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-gradient-to-r from-gradient-var-3 to-gradient-var-4">
            {' '}
          </div>
          <p>var-3 to var-4</p>
          <p>#OB066E - #8DC3ED</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-gradient-var-1"> </div>
          <p>gradient-var-1</p>
          <p>#CB1488</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-gradient-var-2"> </div>
          <p>gradient-var-2</p>
          <p>#EF4C3A</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-gradient-var-3"> </div>
          <p>gradient-var-3</p>
          <p>#OB066E</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-gradient-var-4"> </div>
          <p>gradient-var-4</p>
          <p>#8DC3ED</p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-8 mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-hue-800"> </div>
          <p>hue-800</p>
          <p>#0C0C0C</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-hue-700"> </div>
          <p>hue-700</p>
          <p>#52555D</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-hue-400"> </div>
          <p>hue-400</p>
          <p>#B9C0D3</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-hue-300"> </div>
          <p>hue-300</p>
          <p>#EEF2FF</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-hue-200"> </div>
          <p>hue-200</p>
          <p>#F6F6F6</p>
        </div>
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-hue-100"> </div>
          <p>hue-100</p>
          <p>#FFFFFF</p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-8 mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-cardBG"> </div>
          <p>cardBG</p>
          <p>#FFFFFF</p>
        </div>
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
      <div className="flex flex-row flex-wrap gap-8 mb-4">
        <div className="flex flex-col ">
          <div className="w-24 h-10 bg-error"> </div>
          <p>Error</p>
          <p>#F21A06</p>
        </div>
      </div>
    </section>
  );
}
