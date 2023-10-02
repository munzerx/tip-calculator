"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import person from "@/public/icon-person.svg";
import dollar from "@/public/icon-dollar.svg";

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedTipPercentage, setSelectedTipPercentage] = useState(null);

  // Calculate tip and total whenever bill, tip, customTip, or people change
  useEffect(() => {
    
    if (isNaN(people)) {
      setPeople(1);
    }
    if (isNaN(bill)) {
      setBill(0);
    }
    if (tip == 0) {
      const calculatedTipAmount = bill / people;
      const calculatedTotal = bill / people + calculatedTipAmount;

      setTipAmount(calculatedTipAmount);
      setTotal(calculatedTotal);
    } else {
      const calculatedTipAmount = (bill * (tip)) / 100 / people;
      const calculatedTotal = bill / people + calculatedTipAmount;

      setTipAmount(calculatedTipAmount);
      setTotal(calculatedTotal);
    }
  }, [bill, people, tip]);


  // Handle input change for bill
  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(parseFloat(e.target.value));
  };

  // Handle input change for number of people
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(parseInt(e.target.value));
  };

  const handleTipButtonClick = (percentage: number) => {
    console.log("button tip is "+percentage);
    setTip(percentage);
    setCustomTip("")
  };

  // Handle input change for custom tip
  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Custom Tip is " + e.target.value);
    
    setSelectedTipPercentage(null);
    setTip(parseFloat(e.target.value));
    setCustomTip(e.target.value)
  };

  // Reset all values
  const resetValues = () => {
    setBill(null);
    setTip(0);
    setCustomTip("");
    setPeople(1);
    setTipAmount(0);
    setTotal(0);
    setSelectedTipPercentage(null);
  };

  return (
    <div className="flex flex-col gap-10 bg-white rounded-t-3xl text-grayish-cyan text-left p-8 text-xl font-bold">
      <div className="flex flex-col relative gap-4">
        <label>Bill</label>
        <Image
          alt=""
          src={dollar}
          width={30}
          className="absolute inset-y-12 left-0 pl-2 py-3 flex items-center text-grayish-cyan"
        />
        <input
          type="number"
          placeholder="0"
          className="bg-very-light-grayish-cyan p-4 text-dark-cyan text-right text-2xl rounded-md"
          onChange={handleBillChange}
        />
      </div>
      <div className="flex flex-col relative gap-4">
        <label>Select Tip %</label>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          {[5, 10, 15, 25, 50].map((tipPercentage) => (
            <button
              key={tipPercentage}
              onClick={() => handleTipButtonClick(tipPercentage)}
              className={`px-4 py-4 rounded-lg text-white ${
                selectedTipPercentage === tipPercentage
                  ? "bg-strong-cyan text-dark-cyan"
                  : "bg-dark-cyan hover:bg-strong-cyan hover:text-dark-cyan"
              } selection:bg-strong-cyan selection:text-dark-cyan`}
            >
              {tipPercentage}%
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom"
            className="text-dark-cyan bg-very-light-grayish-cyan rounded-lg text-center"
            onChange={handleCustomTipChange}
            value={customTip}
          />
        </div>
      </div>
      <div className="flex flex-col relative gap-4">
        <label>Number of People</label>
        <Image
          alt=""
          src={person}
          width={30}
          className="absolute inset-y-12 left-0 pl-2 py-3 flex items-center text-grayish-cyan"
        />
        <input
          type="number"
          placeholder="1"
          className="bg-very-light-grayish-cyan p-4 text-dark-cyan text-right text-2xl rounded-md"
          onChange={handlePeopleChange}
        />
      </div>
      <div className="flex flex-col bg-dark-cyan rounded-xl p-6 gap-4">
        <div className="flex flex-row justify-between">
          <section className="flex flex-col">
            <span className="text-white">Tip Amount</span>
            <span className="text-sm">/ person</span>
          </section>
          <span className="text-strong-cyan text-2xl">
            ${tipAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <section className="flex flex-col">
            <span className="text-white">Total</span>
            <span className="text-sm">/ person</span>
          </section>
          <span className="text-strong-cyan text-2xl">${total.toFixed(2)}</span>
        </div>
        <button
          className="px-4 py-4 rounded-lg text-2xl uppercase text-dark-cyan bg-strong-cyan hover:bg-very-light-grayish-cyan hover:text-strong-cyan"
          onClick={resetValues}
        >
          reset
        </button>
      </div>
    </div>
  );
}
