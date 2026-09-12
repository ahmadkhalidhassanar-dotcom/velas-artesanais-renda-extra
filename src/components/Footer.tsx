import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#241C16] text-[#D1C5B8] text-xs py-10 px-4 border-t border-stone-800">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-stone-300 font-bold text-sm tracking-wide">
          <span>🕯️ Velas Artesanais • Renda Extra</span>
        </div>

        <p className="text-stone-400 max-w-lg mx-auto leading-relaxed">
          Este material tem caráter educativo e prático sobre a confecção artesanal de velas aromáticas. Os resultados obtidos dependem exclusivamente da dedicação pessoal, prática e empenho de cada indivíduo.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400 pt-2 border-t border-stone-800/80">
          <span className="inline-flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Pagamento Processado com Criptografia 256-bit
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Garantia de 7 Dias
          </span>
        </div>

        <p className="text-stone-500 pt-2">
          © {new Date().getFullYear()} Velas Artesanais. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
