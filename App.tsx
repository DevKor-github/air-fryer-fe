import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: 'http://10.121.218.47:5173/repicka-web/'}} />
    </SafeAreaView>
  );
}
