using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
  public class StockRepository : IStockRepository
  {
    //dependency injection to preheat the oven which means it will bring db before we actually use any of it
    private readonly ApplicationDBContext _context;
    public StockRepository(ApplicationDBContext context)
    {
      _context = context;
    }

    public async Task<Stock> CreateAsync(Stock stockModel)
    {
      await _context.Stocks.AddAsync(stockModel);
      await _context.SaveChangesAsync();
      return stockModel;
    }

    public async Task<Stock?> DeleteAsync(int id)
    {
      var stockModel = await _context.Stocks.FirstOrDefaultAsync(x => x.ID == id);
      if (stockModel == null)
      {
        return null;
      }
      _context.Stocks.Remove(stockModel);
      await _context.SaveChangesAsync();
      return stockModel;

    }

    public async Task<List<Stock>> GetAllAsync(QueryObject query)
    {
      // return await _context.Stocks.Include(c => c.Comments).ToListAsync();
      var stocks = _context.Stocks.Include(c => c.Comments).ThenInclude(a => a.AppUser).AsQueryable();

      if (!string.IsNullOrWhiteSpace(query.CompanyName))
        stocks = stocks.Where(s => s.CompanyName.Contains(query.CompanyName));

      if (!string.IsNullOrWhiteSpace(query.Symbol))
        stocks = stocks.Where(s => s.Symbol.Contains(query.Symbol));

      if (!string.IsNullOrWhiteSpace(query.SortBy))
      {
        if (query.SortBy.Equals("Symbol", StringComparison.OrdinalIgnoreCase))
        {
          stocks = query.IsDecsending ? stocks.OrderByDescending(s => s.Symbol) : stocks.OrderBy(s => s.Symbol);
        }
      }
      //this will do calculation for pagination
      var skipNumber = (query.PageNumber - 1) * query.PageSize;
      return await stocks.Skip(skipNumber).Take(query.PageSize).ToListAsync();
    }

    public async Task<Stock?> GetByIdAsync(int id)
    {
      return await _context.Stocks.Include(c => c.Comments).ThenInclude(a => a.AppUser).FirstOrDefaultAsync(i => i.ID == id);
    }
    public async Task<Stock?> GetBySymbolAsync(string symbol)
    {
      return await _context.Stocks.FirstOrDefaultAsync(s => s.Symbol == symbol);
    }
    public async Task<bool> StockExists(int id)
    {
      return await _context.Stocks.AnyAsync(s => s.ID == id);
    }

    public async Task<Stock?> UpdateAsync(int id, UpdateStocklReqestDto stockDto)
    {
      var existingStock = await _context.Stocks.FirstOrDefaultAsync(x => x.ID == id);
      if (existingStock == null)
      {
        return null;
      }
      existingStock.Symbol = stockDto.Symbol;
      existingStock.CompanyName = stockDto.CompanyName;
      existingStock.Purchase = stockDto.Purchase;
      existingStock.LastDiv = stockDto.LastDiv;
      existingStock.Industry = stockDto.Industry;
      existingStock.MarketCap = stockDto.MarketCap;
      await _context.SaveChangesAsync();
      return existingStock;
    }
  }
}