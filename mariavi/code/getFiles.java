public static ArrayList<File> getFiles(String extension, File folder, boolean subFolders) throws IOException {
    File[] dirs = {folder};
    ArrayList<File> directories = new ArrayList<>(Arrays.asList(dirs));
    if (subFolders){
        directories = getSubFolders(folder);
    }

    ArrayList<File> files = new ArrayList<>();
    for (File dir : directories) {
        File[] filesInDir = dir.listFiles((current, name) -> new File(current, name).getName().toLowerCase().endsWith(extension.toLowerCase()));
        if (filesInDir != null && filesInDir.length > 0) {
            files.addAll(Arrays.asList(filesInDir));
        }
    }

    return files;
}
