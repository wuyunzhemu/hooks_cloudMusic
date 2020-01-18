import playList from './playListState/index';
import playStatus from './playStatusState/index';
const providers = [playList.provider,playStatus.provider];
 
export default providers;