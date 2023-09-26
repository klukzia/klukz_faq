import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { wrapper } from "@zero/redux/store";
import globals from "@zero/styles/global/globals";
import GlobalStyled from "@zero/styles/global/GlobalStyled";
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
	const { store, props } = wrapper.useWrappedStore(pageProps);
	const DynamicLayoutRoot = dynamic(() => import("@zero/components/Layout/Layout"), {
		ssr: false,
	});

	return (
		<ThemeProvider theme={globals}>
			<Provider store={store}>
				<GlobalStyled />
				<DynamicLayoutRoot>
					<Component {...props} />
				</DynamicLayoutRoot>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
