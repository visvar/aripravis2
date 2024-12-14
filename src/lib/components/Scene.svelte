<script>
	import * as THREE from 'three';
	import { T } from '@threlte/core';
	import { XR, Hand, Controller } from '@threlte/xr';
	import { ContactShadows, Grid, OrbitControls } from '@threlte/extras';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let boxes = [];

	const handleEvent = (event) => {
		console.log('Hand', event);
	};

	const handleControllerEvent = (event) => {
		console.log('Controller', event);
	};

	const handlePinchStart = (event) => {
		const controller = event.target;
		const size = 0.05;
		const geometry = new THREE.BoxGeometry(size, size, size);
		const material = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff });
		const spawn = new THREE.Mesh(geometry, material);

		const indexTip = controller.joints['index-finger-tip'];
		spawn.position.copy(indexTip.position);
		spawn.quaternion.copy(indexTip.quaternion);
		boxes.push(spawn);
		boxes = boxes;
	};

	const hands = ['left', 'right'];

	let cubeCount = 1;
	onMount(() => {
		window.setInterval(() => {
			cubeCount++;
		}, 500);
	});
</script>

<XR>
	{#each hands as hand (hand)}
		<Hand
			{hand}
			on:pinchstart={handlePinchStart}
			on:connected={handleEvent}
			on:disconnected={handleEvent}
			on:pinchstart={handleEvent}
			on:pinchend={handleEvent}
		/>

		<Controller
			{hand}
			on:connected={handleControllerEvent}
			on:disconnected={handleControllerEvent}
			on:select={handleControllerEvent}
			on:squeeze={handleControllerEvent}
			on:selectstart={handleControllerEvent}
			on:selectend={handleControllerEvent}
			on:squeezestart={handleControllerEvent}
			on:squeezeend={handleControllerEvent}
		/>
	{/each}
</XR>

<!-- <XR />
<Controller left />
<Controller right />
<Hand left />
<Hand right /> -->

<T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
	<T.CircleGeometry args={[1]} />
	<T.MeshBasicMaterial />
</T.Mesh>

<T.PerspectiveCamera
	makeDefault
	position={[0, 1.8, 1]}
	on:create={({ ref }) => ref.lookAt(0, 1.8, 0)}
/>

<T.AmbientLight />
<T.DirectionalLight />

{#each boxes as box (box.uuid)}
	<T is={box} />
{/each}

<T.PerspectiveCamera makeDefault position={[-10, 10, 10]} fov={15}>
	<OrbitControls enableZoom={true} enableDamping target.y={1.5} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={0.8} position.x={5} position.y={10} />
<T.AmbientLight intensity={0.2} />

<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionThickness={0}
	fadeDistance={25}
	cellSize={2}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

{#each d3.range(cubeCount) as d}
	<T.Mesh position.y={1.2} position.z={-2 * d}>
		<T.BoxGeometry />
		<T.MeshStandardMaterial color="#0059BA" />
	</T.Mesh>
{/each}
