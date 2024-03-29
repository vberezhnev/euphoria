import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";

import styles from "./WelcomeStep.module.scss";
import { MainContext } from "../../../pages";
import React from "react";

export const WelcomeStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);

  return (
    <WhiteBlock className={styles.block}>
      <h3 className={styles.title}>
        <img
          className={styles.handWaveImg}
          src="/static/hand-wave.png"
          alt="Celebration"
        />
        Welcome to Euphoria!
      </h3>
      <p>
        We’re working hard to get Euphoria ready for everyone! While we wrap up
        the finishing youches, we’re adding people gradually to make sure
        nothing breaks :)
      </p>
      <div>
        <Button onClick={onNextStep}>
          Get your username
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </div>
      <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
    </WhiteBlock>
  );
};
