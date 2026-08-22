import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookReader from './components/BookReader';
import MonsterGallery from './components/MonsterGallery';
import BunkerWorkbench from './components/BunkerWorkbench';
import GamesHub from './components/GamesHub';
import DevStorySection from './components/DevStorySection';
import DancePartyModal from './components/DancePartyModal';
import BunkerVaultModal from './components/BunkerVaultModal';
import NoahModal from './components/NoahModal';
import GameModal from './components/GameModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedMonsterId, setSelectedMonsterId] = useState<string>('mimic');
  const [dancePartyOpen, setDancePartyOpen] = useState<boolean>(false);
  const [vaultOpen, setVaultOpen] = useState<boolean>(false);
  const [noahOpen, setNoahOpen] = useState<boolean>(false);
  const [gameOpen, setGameOpen] = useState<boolean>(false);
  // Default sound off as per guidelines/requirements
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Global secret key sequence buffer
  const keyBufferRef = useRef<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore typing inside form inputs
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key.length === 1) {
        keyBufferRef.current = (keyBufferRef.current + e.key.toUpperCase()).slice(-15);
        const buf = keyBufferRef.current;

        if (buf.endsWith('DANCE') || buf.endsWith('ПАТИ') || buf.endsWith('ДИСКО')) {
          setDancePartyOpen(true);
          keyBufferRef.current = '';
        } else if (buf.endsWith('NOAH') || buf.endsWith('КОВЧЕГ')) {
          setNoahOpen(true);
          keyBufferRef.current = '';
        } else if (buf.endsWith('GAME') || buf.endsWith('ИГРА') || buf.endsWith('GODOT')) {
          setGameOpen(true);
          keyBufferRef.current = '';
        } else if (buf.endsWith('APEX') || buf.endsWith('РАКЕТА')) {
          setActiveTab('bunker');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          keyBufferRef.current = '';
        } else if (buf.endsWith('VAULT') || buf.endsWith('БУНКЕР')) {
          setVaultOpen(true);
          keyBufferRef.current = '';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenMonster = (monsterId: string) => {
    setSelectedMonsterId(monsterId);
    setActiveTab('monsters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] flex flex-col justify-between selection:bg-[#ff4e00] selection:text-white font-body artistic-paper">
      {/* Sticky Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDanceParty={() => setDancePartyOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Home Overview / Presentation by Vlad */}
        {activeTab === 'home' && (
          <HeroSection
            onNavigate={handleNavigate}
            onOpenVaultDoor={() => setVaultOpen(true)}
            soundEnabled={soundEnabled}
          />
        )}

        {/* 4 Monsters Dossier */}
        {activeTab === 'monsters' && (
          <MonsterGallery
            selectedMonsterId={selectedMonsterId}
            soundEnabled={soundEnabled}
          />
        )}

        {/* 16-Chapter Book Reader */}
        {activeTab === 'book' && (
          <BookReader
            onOpenMonster={handleOpenMonster}
            soundEnabled={soundEnabled}
          />
        )}

        {/* Bunker & Workbench */}
        {activeTab === 'bunker' && (
          <BunkerWorkbench
            soundEnabled={soundEnabled}
          />
        )}

        {/* Games Hub (Shadow Detector, Quiz, Monster Creator) */}
        {activeTab === 'games' && (
          <GamesHub
            soundEnabled={soundEnabled}
          />
        )}

        {/* Story of Vlad & Papa */}
        {activeTab === 'devstory' && (
          <DevStorySection
            soundEnabled={soundEnabled}
          />
        )}
      </main>

      {/* Bunker Vault Door Interactive Code Lock Modal */}
      <BunkerVaultModal
        isOpen={vaultOpen}
        onClose={() => setVaultOpen(false)}
        soundEnabled={soundEnabled}
      />

      {/* Noah Easter Egg Modal */}
      <NoahModal
        isOpen={noahOpen}
        onClose={() => setNoahOpen(false)}
        soundEnabled={soundEnabled}
      />

      {/* Godot 4 Game Status Modal */}
      <GameModal
        isOpen={gameOpen}
        onClose={() => setGameOpen(false)}
        soundEnabled={soundEnabled}
      />

      {/* Dance Party Interactive Modal */}
      <DancePartyModal
        isOpen={dancePartyOpen}
        onClose={() => setDancePartyOpen(false)}
        soundEnabled={soundEnabled}
      />

      {/* Footer with Secret Terminal */}
      <Footer
        onOpenDanceParty={() => setDancePartyOpen(true)}
        onOpenNoahModal={() => setNoahOpen(true)}
        onOpenGameModal={() => setGameOpen(true)}
        onOpenVaultDoor={() => setVaultOpen(true)}
        onNavigate={handleNavigate}
        soundEnabled={soundEnabled}
      />
    </div>
  );
}

