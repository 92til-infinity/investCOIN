import React from "react";

class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockXValues: [],
            stockYValues: []
        }
    }

    componentDidMount() {
        this.fetchStocks();
    }

    fetchStock() {
        // Alpha Vantage API used here
        const API_KEY = "TUPUB72P4SG53LLQ"
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=${API_KEY}`;


        fetch(API_CALL)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data)
                }
            )
    }







    render() {
        return (
            <div>
                <h1>Stock Market Bets</h1>
            </div>
        )

    }
}

export default Stocks