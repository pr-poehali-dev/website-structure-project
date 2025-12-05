import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ROICalculator = () => {
  const [roiData, setRoiData] = useState({ investment: 0, savings: 0, years: 5 });
  const [roiResult, setRoiResult] = useState(0);

  const calculateROI = () => {
    const { investment, savings, years } = roiData;
    const totalSavings = savings * 12 * years;
    const roi = ((totalSavings - investment) / investment) * 100;
    const paybackMonths = investment / savings;
    setRoiResult(Math.round(roi));
    return { roi: Math.round(roi), paybackMonths: Math.round(paybackMonths) };
  };

  return (
    <section id="roi" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Калькулятор окупаемости
          </h2>
          <p className="text-xl text-gray-600">
            Рассчитайте срок окупаемости модернизации вашей линии
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="investment">Инвестиции (₽)</Label>
                <Input
                  id="investment"
                  type="number"
                  placeholder="5000000"
                  value={roiData.investment || ''}
                  onChange={(e) => setRoiData({...roiData, investment: Number(e.target.value)})}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="savings">Экономия в месяц (₽)</Label>
                <Input
                  id="savings"
                  type="number"
                  placeholder="200000"
                  value={roiData.savings || ''}
                  onChange={(e) => setRoiData({...roiData, savings: Number(e.target.value)})}
                  className="mt-2"
                />
              </div>
            </div>
            <div className="mb-6">
              <Label htmlFor="years">Период расчета (лет)</Label>
              <Input
                id="years"
                type="number"
                placeholder="5"
                value={roiData.years || ''}
                onChange={(e) => setRoiData({...roiData, years: Number(e.target.value)})}
                className="mt-2"
              />
            </div>
            <Button 
              onClick={calculateROI} 
              className="w-full bg-primary hover:bg-primary/90 mb-6"
            >
              Рассчитать окупаемость
            </Button>
            {roiResult !== 0 && (
              <div className="bg-primary/10 rounded-lg p-6 grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{calculateROI().paybackMonths} мес</div>
                  <div className="text-sm text-gray-600">Срок окупаемости</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{roiResult}%</div>
                  <div className="text-sm text-gray-600">ROI за {roiData.years} лет</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
