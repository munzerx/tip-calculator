"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import person from "@/public/icon-person.svg";
import dollar from "@/public/icon-dollar.svg";

export default function Calculater() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function calculateTip() {
    if (bill == null || tip == null || people == null || tipAmount == null) {
      console.log("Error");
    } else {
      console.log(bill);
      console.log(tip);
      console.log(people);
      console.log(tipAmount);
      console.log(total);

      setTipAmount((bill * tip) / 100 / people);
      setTotal(bill / people + tipAmount);
    }
  }

  function resetValues() {
    setBill(0);
    setTip(0);
    setPeople(1);
    setTipAmount(0);
    setTotal(0);
  }

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
        ></input>
      </div>
      <div className="flex flex-col relative gap-4">
        <label>Select Tip %</label>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          <button
            onClick={() => setTip(5)}
            className="px-4 py-4 rounded-lg text-white bg-dark-cyan hover:bg-strong-cyan hover:text-dark-cyan selection:bg-strong-cyan selection:text-dark-cyan"
          >
            5%
          </button>
          <button
            onClick={() => setTip(10)}
            className="px-4 py-4 rounded-lg text-white bg-dark-cyan hover:bg-strong-cyan hover:text-dark-cyan selection:bg-strong-cyan selection:text-dark-cyan"
          >
            10%
          </button>
          <button
            onClick={() => setTip(15)}
            className="px-4 py-4 rounded-lg text-white bg-dark-cyan hover:bg-strong-cyan hover:text-dark-cyan selection:bg-strong-cyan selection:text-dark-cyan"
          >
            15%
          </button>
          <button
            onClick={() => setTip(25)}
            className="px-4 py-4 rounded-lg text-white bg-dark-cyan hover:bg-strong-cyan hover:text-dark-cyan selection:bg-strong-cyan selection:text-dark-cyan"
          >
            25%
          </button>
          <button
            onClick={() => setTip(50)}
            className="px-4 py-4 rounded-lg text-white bg-dark-cyan hover:bg-strong-cyan hover:text-dark-cyan selection:bg-strong-cyan selection:text-dark-cyan"
          >
            50%
          </button>
          <input
            type="number"
            placeholder="Custom"
            className="text-dark-cyan bg-very-light-grayish-cyan rounded-lg text-center"
            value={customTip}
            onChange={() => {
              setCustomTip(customTip);
            }}
          ></input>
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
          placeholder="0"
          className="bg-very-light-grayish-cyan p-4 text-dark-cyan text-right text-2xl rounded-md"
          onChange={calculateTip}
        ></input>
      </div>
      <div className="flex flex-col bg-dark-cyan rounded-xl p-6 gap-4">
        <div className="flex flex-row justify-between">
          <section className="flex flex-col">
            <span className="text-white">Tip Amount</span>
            <span className="text-sm">/ person</span>
          </section>
          <span className="text-strong-cyan text-2xl">${tipAmount}</span>
        </div>
        <div className="flex flex-row justify-between">
          <section className="flex flex-col">
            <span className="text-white">Total</span>
            <span className="text-sm">/ person</span>
          </section>
          <span className="text-strong-cyan text-2xl">${total}</span>
        </div>
        <button
          className="px-4 py-4 rounded-lg text-2xl uppercase text-dark-cyan bg-strong-cyan hover:bg-dark-cyan hover:text-strong-cyan"
          onClick={resetValues}
        >
          reset
        </button>
      </div>
    </div>
  );
}
