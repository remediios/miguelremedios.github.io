import { Divider, ToggleButton, ToggleButtonGroup } from './style';

const TagSelector = ({
  toggle,
  setToggle,
}: {
  toggle: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <ToggleButtonGroup>
      {toggle === 'all' ? (
        <ToggleButton $active value="all" onClick={() => setToggle('all')}>
          ALL
        </ToggleButton>
      ) : (
        <ToggleButton value="all" onClick={() => setToggle('all')}>
          ALL
        </ToggleButton>
      )}
      <Divider />
      {toggle === 'webApp' ? (
        <ToggleButton
          $active
          value="webApp"
          onClick={() => setToggle('webApp')}
        >
          WEB APPLICATIONS
        </ToggleButton>
      ) : (
        <ToggleButton value="webApp" onClick={() => setToggle('webApp')}>
          WEB APPLICATIONS
        </ToggleButton>
      )}
      <Divider />
      {toggle === 'machineLearning' ? (
        <ToggleButton
          $active
          value="machineLearning"
          onClick={() => setToggle('machineLearning')}
        >
          MACHINE LEARNING
        </ToggleButton>
      ) : (
        <ToggleButton
          value="machineLearning"
          onClick={() => setToggle('machineLearning')}
        >
          MACHINE LEARNING
        </ToggleButton>
      )}
      <Divider />
      {toggle === 'api' ? (
        <ToggleButton $active value="api" onClick={() => setToggle('api')}>
          APIS
        </ToggleButton>
      ) : (
        <ToggleButton value="api" onClick={() => setToggle('api')}>
          APIS
        </ToggleButton>
      )}
    </ToggleButtonGroup>
  );
};

export default TagSelector;
