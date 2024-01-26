echo Starting Upload Script
set /p version="Version (n for only latest): "
if /i "%version%" == "n" (
docker build . -t oribia/meiibot.xyz
docker push oribia/meiibot.xyz
) else (
docker build . -t oribia/meiibot.xyz
docker build . -t oribia/meiibot.xyz:%version%
docker push oribia/meiibot.xyz:latest
docker push oribia/meiibot.xyz:%version%
)
pause