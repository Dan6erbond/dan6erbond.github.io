# $scriptPath = $(Get-Location).Path
# $src = $scriptPath + "\build\*"
# $destination = (Get-Item $scriptPath).Parent.FullName

# echo $scriptPath
# echo $src
# echo $destination

# Copy-Item -Force -Recurse -Verbose $src -Destination $destination
Copy-Item "./dist/*" -Destination "../" -Recurse -Force
