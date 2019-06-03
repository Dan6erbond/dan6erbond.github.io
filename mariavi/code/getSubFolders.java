public static ArrayList<File> getSubFolders(File folder) {
    File[] dirs = {folder};
    ArrayList<File> directories = new ArrayList<>(Arrays.asList(dirs));

    File[] fs = {folder};
    ArrayList<File> folders = new ArrayList<>(Arrays.asList(fs));
    while (folders.size() > 0){
        ArrayList<File> remove = new ArrayList<>();
        ArrayList<File> add = new ArrayList<>();

        for (File f : folders){
            File[] subDirectories = f.listFiles((current, name) -> new File(current, name).isDirectory());
            directories.addAll(Arrays.asList(subDirectories));
            add.addAll(Arrays.asList(subDirectories));
            remove.add(f);
        }

        folders.addAll(add);
        folders.removeAll(remove);
    }

    return directories;
}
