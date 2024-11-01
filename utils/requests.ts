import supabase from "./supabase";

export const getProjects = async () => {
  try {
    const { data: projects } = await supabase.from("projects").select("*");

    return projects;
  } catch (error: any) {
    console.log(error);
  }
};

export const getProject = async (name: string) => {
  try {
    const { data: projects } = await supabase
      .from("projects")
      .select("*")
      .match({ name })
      .single();

    return projects;
  } catch (error: any) {
    console.log(error);
  }
};
