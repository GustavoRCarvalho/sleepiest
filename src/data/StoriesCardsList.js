import {Image} from 'react-native';
import image from '../assets/images/1330238.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(image).uri;

export const StoriesCardsList = [
  {title: 'Corn Fields1', time: 41, src: DEFAULT_IMAGE},
  {title: 'Corn Fields2', time: 41, src: DEFAULT_IMAGE},
  {title: 'Corn Fields3', time: 41, src: DEFAULT_IMAGE},
  {title: 'Corn Fields4', time: 41, src: DEFAULT_IMAGE},
  {title: 'Corn Fields5', time: 41, src: DEFAULT_IMAGE},
];
