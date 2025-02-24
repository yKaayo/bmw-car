// import {
//   ViewerApp,
//   AssetManagerPlugin,
//   GBufferPlugin,
//   timeout,
//   ProgressivePlugin,
//   TonemapPlugin,
//   SSRPlugin,
//   SSAOPlugin,
//   DiamondPlugin,
//   FrameFadePlugin,
//   GLTFAnimationPlugin,
//   GroundPlugin,
//   BloomPlugin,
//   TemporalAAPlugin,
//   AnisotropyPlugin,
//   GammaCorrectionPlugin,
//   mobileAndTabletCheck,
//   addBasePlugins,
//   ITexture,
//   TweakpaneUiPlugin,
//   AssetManagerBasicPopupPlugin,
//   CanvasSnipperPlugin,
//   IViewerPlugin,
//   FileTransferPlugin,
// } from "webgi";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef, useCallback } from "react";
// import { useEffect } from "react";

// const WebGiViewer = () => {
//   const canvasRef = useRef(null);
//   const setupViewer = useCallback(async () => {
//     const viewer = new ViewerApp({
//       canvas: canvasRef.current,
//     });

//     // Add plugins individually.
//     // await viewer.addPlugin(GBufferPlugin)
//     // await viewer.addPlugin(new ProgressivePlugin(32))
//     // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
//     // await viewer.addPlugin(GammaCorrectionPlugin)
//     // await viewer.addPlugin(SSRPlugin)
//     // await viewer.addPlugin(SSAOPlugin)
//     // await viewer.addPlugin(DiamondPlugin)
//     // await viewer.addPlugin(FrameFadePlugin)
//     // await viewer.addPlugin(GLTFAnimationPlugin)
//     // await viewer.addPlugin(GroundPlugin)
//     // await viewer.addPlugin(BloomPlugin)
//     // await viewer.addPlugin(TemporalAAPlugin)
//     // await viewer.addPlugin(AnisotropyPlugin)
//     // and many more...

//     // or use this to add all main ones at once.
//     await addBasePlugins(viewer); // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

//     // Add a popup(in HTML) with download progress when any asset is downloading.
//     await viewer.addPlugin(AssetManagerBasicPopupPlugin);

//     // Required for downloading files from the UI
//     await viewer.addPlugin(FileTransferPlugin);

//     // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
//     await viewer.addPlugin(CanvasSnipperPlugin);

//     // Import and add a GLB file.
//     await viewer.load("../assets/scene.glb");
//   }, []);

//   useEffect(() => {
//     setupViewer();
//   }, []);

//   return (
//     <div>
//       <canvas id="webgi-canvas" ref={canvasRef}></canvas>
//     </div>
//   );
// };
