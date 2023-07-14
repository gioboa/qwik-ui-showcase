import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Tabs, Tab, TabPanel, TabList } from '@qwik-ui/headless';
import styles from './index.css?inline';

export default component$(() => {
	useStyles$(styles);
	return (
		<>
			<h1>Qwik UI Showcase</h1>
			<Tabs behavior='automatic' class='tabs'>
				<TabList>
					<Tab class='tab-items'>Qwik</Tab>
					<Tab class='tab-items'>Partytown</Tab>
					<Tab class='tab-items'>Mitosis</Tab>
				</TabList>
				<TabPanel class='tab-panel'>
					Qwik is a new kind of web framework that can deliver instant loading
					web applications at any size or complexity. Your sites and apps can
					boot with about 1kb of JS (regardless of application complexity), and
					achieve consistent performance at scale.
				</TabPanel>
				<TabPanel class='tab-panel'>
					Qwik is a new kind of web framework that can deliver instant loading
					web applications at any size or complexity. Your sites and apps can
					boot with about 1kb of JS (regardless of application complexity), and
					achieve consistent performance at scale.
				</TabPanel>
				<TabPanel class='tab-panel'>
					Partytown is a lazy-loaded library to help relocate resource intensive
					scripts into a web worker, and off of the main thread. Its goal is to
					help speed up sites by dedicating the main thread to your code, and
					offloading third-party scripts to a web worker.
				</TabPanel>
				<TabPanel class='tab-panel'>
					Mitosis is a subset of JSX. It supports generating code for a number
					of frontend frameworks, including React, Vue, Angular, Svelte, and
					Solid.
				</TabPanel>
			</Tabs>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
};
