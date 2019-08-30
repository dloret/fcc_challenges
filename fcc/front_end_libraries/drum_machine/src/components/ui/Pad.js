import React from 'react';

export default class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = null;
  }

  playSound = () => {
    if (this.audioRef.id === this.props.playing) {
      const audioPromise = this.audioRef.play();
      if (audioPromise !== undefined) {
        audioPromise
          .then(console.log(`Playing sound: ${this.props.playing}`))
          .catch(error => console.error(error.message));
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    this.playSound();
  }

  render() {
    const { source, padId } = this.props;

    return (
      <audio
        src={source}
        ref={audioEl => (this.audioRef = audioEl)}
        className="clip"
        id={padId}
        type="audio/mp3"
      />
    );
  }
}
