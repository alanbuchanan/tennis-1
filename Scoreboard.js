class Main extends React.Component {

    constructor() {
        super();
        this.handleShowClick = this.handleShowClick.bind(this);
        this.state = {
            showingMore: false,
        }
    }

    handleShowClick() {
        this.setState({
            showingMore: !this.state.showingMore,
        }, () => {
            console.log('this.state.showingMore:', this.state.showingMore);
        })
    }

    render() {
        let displayIfShowingMore = {display: this.state.showingMore ? 'flex' : 'none'}
        return (
            <div className="tennis">
                <div className="wrapper" id="wrapper">
                    <div className="set-titles">
                        <div></div>
                        <div className="empty"></div>
                        <div>Game</div>
                        <div className={this.state.showingMore ? "" : "hide"}>1st Set</div>
                        <div className="active-set">
                            <div>2nd Set</div>
                            <div>01' 23"</div>
                        </div>
                        <div>3rd Set</div>
                    </div>
                    <div className="player-a">
                        <div>
                            <div>Bertie Davieslongname</div>
                            <div>Jane Fonda</div>
                        </div>
                        <div className="serving-circle-container">
                            <i className="fa fa-circle" aria-hidden="true"></i>
                        </div>
                        <div>30</div>
                        <div className={this.state.showingMore ? "" : "hide"}>4</div>
                        <div className="won">6</div>
                        <div className="active">4</div>
                    </div>
                    <div className="player-b">
                        <div>
                            <div>Albert Einstein</div>
                            <div>Karen Joggers</div>
                        </div>
                        <div className="serving-circle-container"></div>
                        <div>15</div>
                        <div className={this.state.showingMore ? "won" : "won hide"}>6</div>
                        <div>4</div>
                        <div className="active">5</div>
                    </div>
                </div>
                <button onClick={this.handleShowClick}>Show More></button>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('scoreboard'));