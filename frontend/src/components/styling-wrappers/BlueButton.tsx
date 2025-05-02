import IntrinsicButton from '../intrinsic/IntrinsicButton';
import withStyle from '../hoc/withStyle';

const BlueButton = withStyle(
    IntrinsicButton,
    'bg-blue-500 text-white text-base border-0 rounded-full whitespace-nowrap cursor-pointer hover:bg-blue-300 active:bg-blue-500'
);

export default BlueButton;
