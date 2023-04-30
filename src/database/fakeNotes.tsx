const fakeNotes = [
    {
        "tradeID": 9,
        "id": 0,
        "content": `<h1>Apple Investment</h1><p>Today, I decided to purchase 1000 shares of&nbsp;<strong>APPL</strong> at $10.00 per share with a $10.00 commission for a total trade cost of <span style="color: rgb(186, 55, 42);" data-mce-style="color: rgb(186, 55, 42);"><em>$10,010.00</em></span>.</p><p>I made this trade after conducting thorough research on APPL and analyzing its financials, market trends, and future prospects. Based on my analysis, I am confident that APPL is undervalued and has a strong potential for growth in the future.</p><p>Furthermore, I have taken note of the recent positive developments in the industry that <strong>APPL</strong> operates in, as well as the positive news coming from the company itself. I am anticipating a positive earnings report next quarter, which I believe will drive up the price of <strong>APPL</strong>.</p><h2>Risk Management</h2><p>In terms of risk management, I have set a stop loss order at $9.50 per share to limit my potential losses. I also plan to monitor the market closely to stay on top of any developments that may impact the performance of <strong>APPL</strong>.</p><p>Overall, I am excited about this trade and confident in my analysis. I look forward to seeing how it performs in the coming weeks and months.</p>`,
        "updatedAt": 1648665600000,
        "createdAt": 1648565600000
    },
    {
        "tradeID": 8,
        "id": 1,
        "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        "updatedAt": 1648828800000,
        "createdAt": 1648728800000
    },
    {
        "tradeID": 6,
        "id": 2,
        "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "updatedAt": 1648992000000,
        "createdAt": 1648892000000
    },
]

function fetchNotes() {
    return fakeNotes
}

export {
    fetchNotes
}