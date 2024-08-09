import React, { useState, useRef } from 'react';

const SelectMonth: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const toggleDropdown = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div className="mb-4.5">
      <label className="mb-2.5 block text-black dark:text-white">Bulan</label>

      <div className="relative z-20 bg-white dark:bg-form-input">
        <select
          ref={selectRef}
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
            isOptionSelected ? 'text-black dark:text-white' : ''
          }`}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            Pilih Bulan
          </option>
          <option value="Januari" className="text-body dark:text-bodydark">
            Januari
          </option>
          <option value="Februari" className="text-body dark:text-bodydark">
            Februari
          </option>
          <option value="Maret" className="text-body dark:text-bodydark">
            Maret
          </option>
          <option value="April" className="text-body dark:text-bodydark">
            April
          </option>
          <option value="Mei" className="text-body dark:text-bodydark">
            Mei
          </option>
          <option value="Juni" className="text-body dark:text-bodydark">
            Juni
          </option>
          <option value="Juli" className="text-body dark:text-bodydark">
            Juli
          </option>
          <option value="Agustus" className="text-body dark:text-bodydark">
            Agustus
          </option>
          <option value="September" className="text-body dark:text-bodydark">
            September
          </option>
          <option value="Oktober" className="text-body dark:text-bodydark">
            Oktober
          </option>
          <option value="November" className="text-body dark:text-bodydark">
            November
          </option>
          <option value="Desember" className="text-body dark:text-bodydark">
            Desember
          </option>
        </select>

        <button
          type="button"
          onClick={toggleDropdown}
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2"
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill="#637381"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SelectMonth;