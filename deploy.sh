#!/usr/bin/env bash
# deploy.sh — Construye y despliega el portafolio (sitio estático Astro)
# Uso: ./deploy.sh [build|up|down|logs]
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_FILE="$SCRIPT_DIR/docker-compose.yml"

ACTION="${1:-up}"

case "$ACTION" in
  build)
    echo "→ Construyendo imagen..."
    docker compose -f "$COMPOSE_FILE" build
    echo "✓ Imagen construida"
    ;;
  up)
    echo "→ Desplegando portafolio..."
    docker compose -f "$COMPOSE_FILE" up -d --build
    echo "✓ Portafolio desplegado"
    docker compose -f "$COMPOSE_FILE" ps
    ;;
  down)
    echo "→ Deteniendo portafolio..."
    docker compose -f "$COMPOSE_FILE" down
    echo "✓ Detenido"
    ;;
  logs)
    docker compose -f "$COMPOSE_FILE" logs -f --tail=100
    ;;
  *)
    echo "Uso: $0 [build|up|down|logs]"
    exit 1
    ;;
esac
