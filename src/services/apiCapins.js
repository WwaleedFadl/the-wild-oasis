import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

// {*-*}  Create a Cabin {*-*}
export async function CreateEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // {*1*} create the cabin.
  let query = supabase.from("cabins");
  // >>>>>>>>>>>> Creating
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // >>>>>>>>>>>> Editing
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    toast.error("Cabins could not be Created.");
  }
  //  {*2*} if it's successful upload the image.
  if (hasImagePath) return data;

  // const avatarFile = event.target.files[0];
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3 >> prevent a new cabin from being created
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    toast.error(
      "Cabin image could not be uploaded and the cabin was not created."
    );
  }
  return data;
}

// {*-*}  Get a Cabin {*-*}
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }
  return data;
}

// {*-*}  Delete a Cabin {*-*}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    toast.error("Cabins could not be Deleted.");
  }

  return data;
}
