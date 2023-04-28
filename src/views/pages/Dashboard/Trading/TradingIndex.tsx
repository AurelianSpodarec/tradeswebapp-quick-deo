
interface TradingItem {
    id: number;
    date: string;
    stock: string;
    bs: "sell" | "buy";
    size: number;
    price: number;
    fees: number;
    stop: number;
    target: number;
    strategy: any;
    value: number;
    risk: number;
    aop: number;
    acp: number;
    rrRatio: number;
    grossPL: number;
    status: "open" | "closed" | "increased" | "decreased";
}

const trades:TradingItem[] = [
    {
        id: 0,
        date: "30/03/2023",
        stock: "CTAG",
        bs: "sell",
        size: 10000,
        price: 6,
        fees: 1000,
        stop: 0,
        target: 0,
        strategy: "swiping",
        value: 50,
        risk: 2.4,
        aop: 43,
        acp: 47,
        rrRatio: 0,
        grossPL: 0,
        status: "open",
    },
    {
        id: 0,
        date: "30/03/2023",
        stock: "CTAG",
        bs: "sell",
        size: 10000,
        price: 6,
        fees: 1000,
        stop: 0,
        target: 0,
        strategy: "swiping",
        value: 50,
        risk: 2.4,
        aop: 43,
        acp: 47,
        rrRatio: 0,
        grossPL: 0,
        status: "open",
    }
]

import LayoutDashboard from '@/views/layouts/LayoutDashboard/LayoutDashboard';
import { useLayoutEffect, useRef, useState } from 'react'
 

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function TradingIndex() {
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedTrades, setSelectedPeople] = useState([])

    useLayoutEffect(() => {
        const isIndeterminate = selectedTrades.length > 0 && selectedTrades.length < trades.length
        setChecked(selectedTrades.length === trades.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedTrades])

    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : trades)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    return (
        <LayoutDashboard>


        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Trades</h1>
            <p className="mt-2 text-sm text-gray-700">
                A list of all the trades in your account
            </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
                type="button"
                className="block rounded-md bg-skin-brand-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-skin-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skin-brand-600"
            >
                Add Trade
            </button>
            </div>
        </div>


        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="relative">
                {selectedTrades.length > 0 && (
                    <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                    <button
                        type="button"
                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                        Bulk edit
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                        Delete all
                    </button>
                    </div>
                )}
                <table className="min-w-full table-fixed divide-y divide-gray-300">


                    <thead>
                    <tr>
                        <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                        <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-skin-brand-600 focus:ring-skin-brand-600"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                        />
                        </th>
                        <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                        Trade No.
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Stock
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        B/S
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Size
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Price
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Fees
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Stop
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Target
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Strategy
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Value
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Risk %
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        AOP
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        ACP
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        R/R Ratio
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Gross P&L
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>



                    <tbody className="divide-y divide-gray-200 bg-white">
                    {trades.map((trade) => (
                        <tr key={trade.id} className={selectedTrades.includes(trade) ? 'bg-gray-50' : undefined}>

                            <td className="relative px-7 sm:px-6">
                                {selectedTrades.includes(trade) && (
                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-skin-brand-600" />
                                )}
                                <input
                                    type="checkbox"
                                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-skin-brand-600 focus:ring-skin-brand-600"
                                    value={trade.id}
                                    checked={selectedTrades.includes(trade)}
                                    onChange={(e) =>
                                        setSelectedPeople(
                                        e.target.checked
                                            ? [...selectedTrades, trade]
                                            : selectedTrades.filter((p) => p !== trade)
                                        )
                                    }
                                />

                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.id}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.date}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.stock}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.bs}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.size}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.price}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.fees}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.stop}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.target}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.strategy}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.value}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.risk}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.aop}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.acp}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.rrRatio}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.grossPL}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.status}</td>
                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <a href="#" className="text-skin-brand-600 hover:text-skin-brand-900">
                            Edit<span className="sr-only">, {trade.id}</span>
                            </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>


                </table>
                </div>
            </div>
            </div>
        </div>
        </LayoutDashboard>
    )
}


export default TradingIndex;


