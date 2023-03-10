import React from 'react';
import Button from 'react-bootstrap/Button';

function HereButton(props) {

    const onHere = () => {
        props.onHere(props.player.id, props.movingPlayer.id)
    }

    if (props.player.position === props.movingPlayer.position) {
        return (
            <Button onClick={onHere} className="btn btn-primary">Here</Button>
        )
    }
}

export default HereButton;