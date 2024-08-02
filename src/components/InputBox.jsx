import React,{useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDiable =false ,
    className = "",
    placeholder=""
}) {
   const amountInputId=useId() //useId hook 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} //useId hook 
                className="text-black/80 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id ={amountInputId} //useId hook 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder={placeholder}//From
                    disabled={amountDisable}
                    value ={amount}
                    onChange={e=>onAmountChange && onAmountChange((e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}// && It is used to check if the value is not undefined or not 0
                    disabled={currencyDiable}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}> 
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;


// //key is used to optimize the performance of loop in jsx or react in (option)