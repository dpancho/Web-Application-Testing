import React from 'react';

const Dashboard = ({ balls, setBalls, strikes, setStrikes }) => {
	const handleBall = () => {
        if(balls >= 3){
            setBalls(0);
            setStrikes(0);
        }else{
            setBalls(balls + 1);
        }
    }

	const handleStrike = () => {
        if(strikes >= 2){
            setBalls(0);
            setStrikes(0);
        }else{
            setStrikes(strikes + 1);
        }
	};

	const handleFoul = () => {
		if (strikes === 0 || strikes === 1) {
			setStrikes(strikes + 1);
		} else {
			setStrikes(2);
		}
	};

	const handleHit = () => {
		setStrikes(0);
		setBalls(0);
	};

	return (
		<div>
			<button onClick={handleStrike}>Strike</button>
			<button onClick={handleBall}>Ball</button>
			<button onClick={handleFoul}>Foul</button>
			<button onClick={handleHit}>Hit</button>
		</div>
	);
};

export default Dashboard;