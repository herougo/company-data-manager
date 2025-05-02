import IntrinsicButton from '../intrinsic/IntrinsicButton';
import withStyle from '../hoc/withStyle';

const tailwindClasses = {
    'colour': 'bg-blue-500 text-white hover:bg-blue-300 active:bg-blue-500',
    'border': 'border-0 rounded-full',
    'other': 'text-base whitespace-nowrap cursor-pointer'
};

const BlueButton = withStyle(
    IntrinsicButton,
    Object.values(tailwindClasses).join(' ')
);

export default BlueButton;
