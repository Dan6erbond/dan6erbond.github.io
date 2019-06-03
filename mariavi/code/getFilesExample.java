File root = new File(".");
ArrayList<File> files = FileHandler.getFiles(".tile", root, true);
files.addAll(FileHandler.getFiles(".item", root, false));
