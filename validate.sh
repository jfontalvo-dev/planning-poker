#!/bin/bash

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Validando instalación de Planning Poker..."
echo ""

# Check Node.js
echo -n "Verificando Node.js... "
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓${NC} $NODE_VERSION"
else
    echo -e "${RED}✗ Node.js no encontrado${NC}"
    exit 1
fi

# Check npm
echo -n "Verificando npm... "
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓${NC} $NPM_VERSION"
else
    echo -e "${RED}✗ npm no encontrado${NC}"
    exit 1
fi

# Check node_modules
echo -n "Verificando node_modules... "
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} Directorio encontrado"
else
    echo -e "${YELLOW}⚠${NC} node_modules no encontrado, ejecuta: npm install"
fi

# Check dependencies
echo -n "Verificando next... "
if npm list next &>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "Verificando socket.io... "
if npm list socket.io &>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "Verificando zustand... "
if npm list zustand &>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "Verificando framer-motion... "
if npm list framer-motion &>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

# Check TypeScript
echo -n "Verificando TypeScript... "
if npm list typescript &>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

# Check Tailwind
echo -n "Verificando Tailwind CSS... "
if npm list tailwindcss &>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo ""
echo -e "${GREEN}✓ Validación completada${NC}"
echo ""
echo "🚀 Para iniciar el proyecto, abre dos terminales y ejecuta:"
echo "   Terminal 1: ${YELLOW}npm run dev${NC}"
echo "   Terminal 2: ${YELLOW}npm run server${NC}"
echo ""
echo "📖 Accede a: http://localhost:3000"
