import bpy
import os
from os.path import dirname, abspath
import pathlib
from bpy import context
scene = context.scene

bpy.ops.wm.read_factory_settings(use_empty=True)

bpy.ops.object.camera_add(location=(1.75, -5, 1), 
                          rotation=( 1.3669034, 0, 0.3760315))


bpy.context.scene.camera = bpy.context.scene.objects["Camera"]

bpy.context.scene.render.resolution_x = 1000
bpy.context.scene.render.resolution_y = 1000
bpy.context.scene.render.film_transparent = True
bpy.context.scene.render.image_settings.color_mode = 'RGBA'

testpah = dirname(dirname(abspath(__file__)))
print(testpah)
for x in range(0,256):
	importPath = os.path.join((testpah),"mushroomNft/assets/build/mushroom"+str(x)+".gltf")
	print(importPath)
	bpy.ops.import_scene.gltf(filepath=importPath)
	
	exportPath = os.path.join((testpah),"mushroomNft/assets/renders/mushroom"+str(x)+".png")
	bpy.context.scene.render.filepath = exportPath 
	bpy.ops.render.render('INVOKE_DEFAULT', write_still=True)
	objs = [bpy.context.scene.objects['RootNode (gltf orientation matrix)'],bpy.context.scene.objects['RootNode (model correction matrix)'],bpy.context.scene.objects['mushroom.obj.cleaner.materialmerger.gles'],bpy.context.scene.objects['Mesh_0'],bpy.context.scene.objects['Mesh_1'],bpy.context.scene.objects['Light'],bpy.context.scene.objects['Camera.001']]
	bpy.ops.object.delete({"selected_objects": objs})
