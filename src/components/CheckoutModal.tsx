import React, { useState } from 'react';
import { PlanItem } from '../types';
import { X, CheckCircle, ShieldCheck, Lock, QrCode, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  plan: PlanItem | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [customLink, setCustomLink] = useState('');
  const [showConfig, setShowConfig] = useState(false);

  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customLink.trim()) {
      window.location.href = customLink.trim();
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div
        className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#FAF6EE] to-[#F5ECE0] border-b border-[#EAE0D2] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-black text-[#A84A22] uppercase tracking-wider block">
              Finalizar Inscrição
            </span>
            <h3 className="text-lg sm:text-xl font-black text-[#231D18]">
              {plan.name} — <span className="text-[#C85A17]">{plan.price}</span>
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-[#231D18]">
                Inscrição Simulada com Sucesso!
              </h4>
              <p className="text-sm text-[#574D45] leading-relaxed max-w-sm mx-auto">
                No ambiente de produção, este botão direcionará seu cliente diretamente para o checkout da sua plataforma favorita (ex: Hotmart, Kiwify, Eduzz, etc.).
              </p>
              <div className="p-4 bg-[#FAF7F2] rounded-2xl text-xs text-left text-stone-600 border border-stone-200">
                <p className="font-bold text-[#231D18] mb-1">Dados simulados:</p>
                <p>• Nome: {name || 'Cliente'}</p>
                <p>• Email: {email || 'cliente@exemplo.com'}</p>
                <p>• Plano Escolhido: {plan.name} ({plan.price})</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#231D18] text-white font-bold text-sm hover:bg-black cursor-pointer"
              >
                Voltar para a página
              </button>
            </div>
          ) : (
            <>
              {/* Plan Summary */}
              <div className="bg-[#FAF7F2] p-4.5 rounded-2xl border border-[#E8DFD3]">
                <div className="flex items-center justify-between font-black text-sm text-[#231D18] mb-2">
                  <span>Conteúdo Incluso:</span>
                  <span className="text-[#C85A17] text-base">{plan.price}</span>
                </div>
                <ul className="text-xs text-[#554A42] space-y-1.5 max-h-36 overflow-y-auto pr-1 font-medium">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-700 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="client-name" className="block text-xs font-black text-[#352B24] mb-1.5">
                    Seu Nome Completo
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] focus:border-transparent bg-white shadow-2xs"
                  />
                </div>

                <div>
                  <label htmlFor="client-email" className="block text-xs font-black text-[#352B24] mb-1.5">
                    Seu Melhor E-mail (para receber o acesso)
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    placeholder="nome@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] focus:border-transparent bg-white shadow-2xs"
                  />
                </div>

                {/* Checkout URL customizer toggle */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setShowConfig(!showConfig)}
                    className="text-xs text-[#A84A22] font-semibold underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Configurar link direto da plataforma (Kiwify / Hotmart / Eduzz)</span>
                  </button>

                  {showConfig && (
                    <div className="mt-2.5 p-3.5 bg-stone-100 rounded-2xl space-y-1.5 text-xs">
                      <label htmlFor="custom-link" className="font-bold text-stone-700 block">
                        URL do Checkout Externo:
                      </label>
                      <input
                        id="custom-link"
                        type="url"
                        placeholder="https://pay.kiwify.com.br/..."
                        value={customLink}
                        onChange={(e) => setCustomLink(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-white"
                      />
                      <p className="text-stone-500 text-[11px]">
                        Ao preencher, o botão abrirá diretamente sua página de pagamento real.
                      </p>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D96522] via-[#C85A17] to-[#B34C0E] hover:from-[#C85A17] hover:to-[#9E3E08] text-white font-black text-base sm:text-lg shadow-[0_10px_24px_-4px_rgba(200,90,23,0.38)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-3 active:scale-[0.98]"
                >
                  <span>IR PARA PAGAMENTO SEGURO</span>
                  {customLink ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>

              {/* Trust badges */}
              <div className="pt-3 border-t border-stone-200/80 grid grid-cols-3 gap-2 text-center text-[11px] text-[#6C6057] font-medium">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 mb-1" />
                  <span>7 Dias de Garantia</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lock className="w-4 h-4 text-emerald-700 mb-1" />
                  <span>Ambiente 100% Seguro</span>
                </div>
                <div className="flex flex-col items-center">
                  <QrCode className="w-4 h-4 text-[#C85A17] mb-1" />
                  <span>Liberação Imediata</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

