import { MeshStandardMaterial, MeshNormalMaterial } from 'three';

//Lily materials
export const pinkMaterial = new MeshStandardMaterial({ color: '#ff99c3' });
export const redMaterial = new MeshStandardMaterial({ color: '#e54343' });
export const whiteMaterial = new MeshStandardMaterial({ color: '#ffffff' });
export const normalMaterial = new MeshNormalMaterial();
export const allLilyMaterials = [pinkMaterial, redMaterial, whiteMaterial, normalMaterial]