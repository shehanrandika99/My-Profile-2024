import React from 'react';
import Lottie from 'react-lottie';
import CountUp from 'react-countup';
import animationData1 from '../lottieAnimations/Animation -1.json';
import animationData2 from '../lottieAnimations/Animation -2.json';
import animationData3 from '../lottieAnimations/Animation -3.json';

function HeroComponent2() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', maxWidth: '300px', margin: '10px', textAlign: 'center' }}>
                <Lottie options={{ ...defaultOptions, animationData: animationData1 }} height={200} width={200} />
                <p className="text-4xl font-bold">Projects</p>
                <div className="text-4xl font-bold mt-2">
                    <CountUp
                        start={1}
                        end={23}
                        duration={5}
                        separator=" "
                        decimals={0}
                        prefix=""
                        suffix=""
                        onEnd={() => console.log('Ended! 👏')}
                        onStart={() => console.log('Started! 💨')}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                                <button onClick={start}></button>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
            <div style={{ flex: '1', minWidth: '200px', maxWidth: '300px', margin: '10px', textAlign: 'center' }}>
                <Lottie options={{ ...defaultOptions, animationData: animationData2 }} height={200} width={200} />
                <p className="text-4xl font-bold">Hackthons</p>
                <div className="text-4xl font-bold mt-2">
                    <CountUp
                        start={1}
                        end={2}
                        duration={5}
                        separator=" "
                        decimals={0}
                        prefix=""
                        suffix=""
                        onEnd={() => console.log('Ended! 👏')}
                        onStart={() => console.log('Started! 💨')}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                                <button onClick={start}></button>
                            </div>
                        )}
                    </CountUp>
                </div>

            </div>
            <div style={{ flex: '1', minWidth: '200px', maxWidth: '300px', margin: '10px', textAlign: 'center' }}>
                <Lottie options={{ ...defaultOptions, animationData: animationData3 }} height={200} width={200} />
                <p className="text-4xl font-bold">Certificates</p>
                <div className="text-4xl font-bold mt-2">
                    <CountUp
                        start={1}
                        end={5}
                        duration={5}
                        separator=" "
                        decimals={0}
                        prefix=""
                        suffix=""
                        onEnd={() => console.log('Ended! 👏')}
                        onStart={() => console.log('Started! 💨')}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                                <button onClick={start}></button>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent2;
