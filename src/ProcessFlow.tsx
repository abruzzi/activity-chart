import './ProcessFlow.css';

type ProcessStepProps = {
  title: string;
  description: string;
  isSubStep?: boolean;
  hasCondition?: boolean;
  children?: React.ReactNode;
};

const ProcessStep = ({ title, description, isSubStep, hasCondition, children }: ProcessStepProps) => (
  <div className={`process-step ${isSubStep ? 'sub-step' : ''}`}>
    <div className="the-link" />
    <div className={`${hasCondition ? 'condition-button' : 'placeholder'}`} />
    <div className="step-content">
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </div>
    {children && <div className="sub-steps">{children}</div>}
  </div>
);

const ProcessVisualization = () => (
  <div className="process-container">
    <h1 className="process-title">The process</h1>
    <div className='steps-container'>
      <div className="process-steps">
        <ProcessStep
          title="A step of a process"
          description="A short description of the step here"
        />
        <ProcessStep
          title="Another step of a process"
          description="A long description of the step here which could be super long, maybe longer than you can ever imagine"
          hasCondition
        >
          <ProcessStep
            title="A sub step of a step"
            description="A short description of the step here"
            isSubStep
          >
            <ProcessStep
              title="A sub step of a step"
              description="A short description of the step here"
              isSubStep
            />
          </ProcessStep>
          <ProcessStep
            title="Another sub step of a step"
            description="A short description of the step here"
            isSubStep
            hasCondition
          />
        </ProcessStep>
        <ProcessStep
          title="Yet another step of a process"
          description="A short description of the step here"
        />
      </div>
    </div>
  </div>
);

export default ProcessVisualization;