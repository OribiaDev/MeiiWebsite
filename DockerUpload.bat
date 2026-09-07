echo Starting Upload Script
set /p version="Version (n for only latest): "
if /i "%version%" == "n" (
docker build . -t oribia/meii.bot
docker push oribia/meii.bot
) else (
docker build . -t oribia/meii.bot
docker build . -t oribia/meii.bot:%version%
docker push oribia/meii.bot:latest
docker push oribia/meii.bot:%version%
)
pause