#!/data/data/com.termux/files/usr/bin/bash
# Sherlock Setup for Termux (Android)
# Tested on Samsung S24 Ultra

echo "=== Sherlock Installer for Termux ==="
echo ""

# Update packages
echo "[1/4] Updating Termux packages..."
pkg update -y && pkg upgrade -y

# Install Python
echo "[2/4] Installing Python..."
pkg install -y python git

# Install Sherlock via pip
echo "[3/4] Installing Sherlock..."
pip install sherlock-project

# Verify installation
echo "[4/4] Verifying installation..."
echo ""

if command -v sherlock &> /dev/null; then
    echo "=== SUCCESS ==="
    echo "Sherlock installed successfully!"
    echo ""
    echo "Usage:"
    echo "  sherlock <username>          # Search for a username"
    echo "  sherlock user1 user2         # Search multiple"
    echo "  sherlock user --csv          # Export to CSV"
    echo ""
    sherlock --version
else
    echo "Installation failed. Try running: pip install sherlock-project"
fi
