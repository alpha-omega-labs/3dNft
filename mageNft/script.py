import bpy
import os
from os.path import dirname, abspath
import pathlib
from bpy import context
scene = context.scene

bpy.ops.wm.read_factory_settings(use_empty=True)

light_data = bpy.data.lights.new(name="light_2.80", type='POINT')
light_data.energy = 300
light_object = bpy.data.objects.new(name="light_2.80", object_data=light_data)
bpy.context.collection.objects.link(light_object)
bpy.context.view_layer.objects.active = light_object
light_object.location = (0, -3, 2)
dg = bpy.context.evaluated_depsgraph_get() 
dg.update()

bpy.ops.object.camera_add(location=(1.25, -3.75, 2), 
                          rotation=( 1.3669034, 0, 0.3760315))


bpy.context.scene.camera = bpy.context.scene.objects["Camera"]

bpy.context.scene.render.resolution_x = 350
bpy.context.scene.render.resolution_y = 350
bpy.context.scene.render.film_transparent = True
bpy.context.scene.render.image_settings.color_mode = 'RGBA'

path = dirname(dirname(abspath(__file__)))
#bpy.ops.import_scene.gltf(filepath="C://Users/lucas/source/repos/MageNFT/build/mage4.gltf")

#for ob in bpy.context.scene.objects:
#	print(ob.name);
for x in range(0,100):
	bpy.ops.import_scene.gltf(filepath="C://Users/lucas/source/repos/MageNFT/build/mage"+str(x)+".gltf")
	bpy.context.scene.render.filepath = "C:/Users/lucas/source/repos/MageNFT/build/preview/mage"+str(x)+".png" 
	bpy.ops.render.render('INVOKE_DEFAULT', write_still=True)
	objs = [
		bpy.context.scene.objects['character_mageHat'],
		bpy.context.scene.objects['character_mageBody'],
		bpy.context.scene.objects['character_mageArmRight'],
		bpy.context.scene.objects['character_mageArnLeft'],
		bpy.context.scene.objects['character_mageHead'], 
		bpy.context.scene.objects['character_mageHair'],
		bpy.context.scene.objects['Light'],
		bpy.context.scene.objects['Camera.001']
	]
    
	bpy.ops.object.delete({"selected_objects": objs})
