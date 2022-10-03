import React, { ReactNode, useState } from 'react';
import { Button, message, Steps } from 'antd';
import './stepComponent.css';

const { Step } = Steps;

interface StepInfo {
  title: string;
  content: ReactNode;
}

interface Props {
  steps: StepInfo[];
}

const StepComponent: React.FC<Props> = (props: Props) => {
  const { steps } = props;
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='steps-content'>{steps[current].content}</div>
      <div className='steps-action'>
        {current < steps.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type='primary' onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default StepComponent;

// Ex:
// const steps = [
//   {
//     title: 'First',
//     content: <firstComponent/>,
//   },
//   {
//     title: 'Second',
//     content: <secondComponent/>,
//   },
//   {
//     title: 'Third',
//     content: <thirdComponent/>,
//   },
//   {
//     title: 'Last',
//     content: <lastComponent/>,
//   },
// ];
