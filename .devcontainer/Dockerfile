FROM oven/bun:latest

RUN apt-get update && apt-get install -y \
    git \
    curl \
    zsh \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

CMD ["sleep", "infinity"]